import { newE2EPage } from '@stencil/core/testing';

describe('my-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-container></my-container>');

    const element = await page.find('my-container');
    expect(element).toHaveClass('hydrated');
  });
});
