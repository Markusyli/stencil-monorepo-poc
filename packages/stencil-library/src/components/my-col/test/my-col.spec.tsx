import { newSpecPage } from '@stencil/core/testing';
import { MyCol } from '../my-col';

describe('my-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyCol],
      html: `<my-col></my-col>`,
    });
    expect(page.root).toEqualHtml(`
      <my-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-col>
    `);
  });
});
