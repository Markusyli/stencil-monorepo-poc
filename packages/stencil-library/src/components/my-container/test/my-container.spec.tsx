import { newSpecPage } from '@stencil/core/testing';
import { MyContainer } from '../my-container';

describe('my-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyContainer],
      html: `<my-container></my-container>`,
    });
    expect(page.root).toEqualHtml(`
      <my-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-container>
    `);
  });
});
