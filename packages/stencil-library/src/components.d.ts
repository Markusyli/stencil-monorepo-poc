/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
    }
    interface MyCol {
        "size": number;
    }
    interface MyContainer {
    }
    interface MyRow {
    }
    interface MyTextInput {
        "label": string;
        "name": string;
        "value": string;
    }
}
export interface MyTextInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyTextInputElement;
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyColElement extends Components.MyCol, HTMLStencilElement {
    }
    var HTMLMyColElement: {
        prototype: HTMLMyColElement;
        new (): HTMLMyColElement;
    };
    interface HTMLMyContainerElement extends Components.MyContainer, HTMLStencilElement {
    }
    var HTMLMyContainerElement: {
        prototype: HTMLMyContainerElement;
        new (): HTMLMyContainerElement;
    };
    interface HTMLMyRowElement extends Components.MyRow, HTMLStencilElement {
    }
    var HTMLMyRowElement: {
        prototype: HTMLMyRowElement;
        new (): HTMLMyRowElement;
    };
    interface HTMLMyTextInputElement extends Components.MyTextInput, HTMLStencilElement {
    }
    var HTMLMyTextInputElement: {
        prototype: HTMLMyTextInputElement;
        new (): HTMLMyTextInputElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-col": HTMLMyColElement;
        "my-container": HTMLMyContainerElement;
        "my-row": HTMLMyRowElement;
        "my-text-input": HTMLMyTextInputElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
    }
    interface MyCol {
        "size": number;
    }
    interface MyContainer {
    }
    interface MyRow {
    }
    interface MyTextInput {
        "label"?: string;
        "name"?: string;
        "onValueChanged"?: (event: MyTextInputCustomEvent<string>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-col": MyCol;
        "my-container": MyContainer;
        "my-row": MyRow;
        "my-text-input": MyTextInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-col": LocalJSX.MyCol & JSXBase.HTMLAttributes<HTMLMyColElement>;
            "my-container": LocalJSX.MyContainer & JSXBase.HTMLAttributes<HTMLMyContainerElement>;
            "my-row": LocalJSX.MyRow & JSXBase.HTMLAttributes<HTMLMyRowElement>;
            "my-text-input": LocalJSX.MyTextInput & JSXBase.HTMLAttributes<HTMLMyTextInputElement>;
        }
    }
}
