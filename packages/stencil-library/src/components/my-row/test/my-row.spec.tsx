import { newSpecPage } from '@stencil/core/testing';
import { MyRow } from '../my-row';

describe('my-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyRow],
      html: `<my-row></my-row>`,
    });
    expect(page.root).toEqualHtml(`
      <my-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-row>
    `);
  });
});
