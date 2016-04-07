/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-07
 * @author Li Yudeng <li@maichong.it>
 */

export default class Help extends service.Model {
  static label = 'Help';
  static defaultColumns = 'title,parent,sort,activated,createdAt';
  static defaultSort = '-sort';
  static searchFields = 'title,content';
  static defaultFilters = {
    activated: true
  };

  static api = {
    list: 1,
    show: 1
  };

  static groups = {
    content: 'Content'
  };
  static fields = {
    title: {
      label: 'Title',
      type: String,
      default: ''
    },
    content: {
      label: ' ',
      type: 'html',
      default: '',
      group: 'content'
    },
    parent: {
      label: 'Parent Help',
      type: 'relationship',
      ref: 'Help'
    },
    relations: {
      label: 'Related Helps',
      type: ['Help']
    },
    sort: {
      label: 'Sort',
      type: Number,
      private: true,
      default: 0
    },
    activated: {
      label: 'Activated',
      //private: true,
      type: Boolean
    },
    createdAt: {
      label: 'Created At',
      type: Date
    }
  };

  preSave() {
    if (this.createdAt) {
      this.createdAt = new Date;
    }
  }
}
