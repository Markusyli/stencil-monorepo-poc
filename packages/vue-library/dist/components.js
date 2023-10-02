import { defineContainer } from './vue-component-lib/utils';
export const MyButton = defineContainer('my-button', undefined);
export const MyCol = defineContainer('my-col', undefined, [
    'size'
]);
export const MyContainer = defineContainer('my-container', undefined);
export const MyRow = defineContainer('my-row', undefined);
export const MyTextInput = defineContainer('my-text-input', undefined, [
    'name',
    'label',
    'value',
    'valueChanged'
]);
//# sourceMappingURL=components.js.map