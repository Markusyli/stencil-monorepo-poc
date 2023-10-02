import { newE2EPage } from '@stencil/core/testing';

describe('my-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-col></my-col>');

    const element = await page.find('my-col');
    expect(element).toHaveClass('hydrated');
  });
});
