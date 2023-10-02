import { Component, Host, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'my-text-input',
  styleUrl: 'my-text-input.css',
  shadow: true,
})
export class MyTextInput {

  @Prop() name: string;

  @Prop({reflect: true, mutable: true}) label: string;

  @Prop({reflect: true, mutable: true}) value: string;

  @Event() valueChanged: EventEmitter<string>;

  private handleChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChanged.emit(this.value);
  }

  render() {
    return (
      <Host>
        <label htmlFor={this.name}>{this.label}</label>
        <div>
          <input type='text' name={this.name} id={this.name} value={this.value} onInput={(event) => this.handleChange(event)} />
        </div>
      </Host>
    );
  }

}
