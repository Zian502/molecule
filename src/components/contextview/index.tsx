import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { prefixClaName, classNames } from 'mo/common/className';
import {
    getRelativePosition,
    select,
    HTMLElementType,
    IPosition,
} from 'mo/common/dom';
import './style.scss';
import { Utils } from 'dt-utils/lib';

export interface IContextViewProps {
    render?: () => React.ReactNode;
}

export interface IContextView {
    contextView: HTMLElementType;
    show(anchorPos: IPosition, render?: () => React.ReactNode): void;
    hide(): void;
}

const contextViewClass = prefixClaName('context-view');
const contentClass = '.context-view-content';

export function useContextView(props?: IContextViewProps): IContextView {
    const claName = classNames(contextViewClass, 'fade-in');
    let contextView: HTMLElementType = select('.' + contextViewClass); // Singleton contextView dom

    const show = (anchorPos: IPosition, render?: () => React.ReactNode) => {
        const content = select(contentClass);
        const renderContent = render || props?.render;
        if (!renderContent)
            throw Error(
                'ContextView show Error: the render parameter not allowed be null!'
            );
        ReactDOM.render(<>{renderContent()}</>, content, () => {
            // Notice: if want to get the computed offsetHeight of contextView,
            // must display contextView ahead.
            contextView!.style.display = 'block';
            const position = getRelativePosition(contextView!, anchorPos);
            contextView!.style.cssText = `
                top: ${position.y}px;
                left: ${position.x}px;
            `;
        });
    };

    const hide = () => {
        if (contextView) {
            contextView.style.display = 'none';
            ReactDOM.unmountComponentAtNode(select(contentClass)!);
        }
    };

    const onMaskClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        hide();
    };

    if (!contextView) {
        contextView = document.createElement('div');
        contextView.className = classNames(claName, Utils.isMacOs() ? 'mac' : null);
        contextView.style.display = 'none';
        const root = document.getElementById('molecule');
        if (!root) {
            document.body.appendChild(contextView);
        } else {
            root.appendChild(contextView);
        }

        ReactDOM.render(
            <>
                <div
                    className="context-view-block"
                    onClick={onMaskClick}
                    onContextMenu={onMaskClick}
                ></div>
                <div className="context-view-content"></div>
            </>,
            contextView
        );
    }

    return { contextView, show, hide };
}
