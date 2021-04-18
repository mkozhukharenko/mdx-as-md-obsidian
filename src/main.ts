import { Plugin } from 'obsidian';

export default class MdxAsMdPlugin extends Plugin {

  async onload() {
    super.onload();

    // register the view and extensions
    this.registerExtensions(["mdx"], "markdown");
  }
}
