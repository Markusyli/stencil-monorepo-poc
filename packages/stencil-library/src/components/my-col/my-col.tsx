import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-col',
  styleUrl: 'my-col.css',
  shadow: true,
})
export class MyCol {

  @Prop() size!: number;

  private calculateSize() {
    const colSize = 100 / 12 * this.size + '%';

    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      'max-width': `${colSize}`,
    };
  }

  render() {
    return (
      <Host
        style={{
          ...this.calculateSize()
        }}
      >
        <slot></slot>
      </Host>
    );
  }

}
