import { newE2EPage } from '@stencil/core/testing';

describe('my-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-row></my-row>');

    const element = await page.find('my-row');
    expect(element).toHaveClass('hydrated');
  });
});
