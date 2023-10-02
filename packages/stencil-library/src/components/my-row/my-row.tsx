import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-row',
  styleUrl: 'my-row.css',
  shadow: true,
})
export class MyRow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
