'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by lixiaoyu on 16-4-6.
 */

class Help extends service.Model {

  preSave() {
    if (this.createdAt) {
      this.createdAt = new Date();
    }
  }
}
exports.default = Help;
Help.label = 'Help';
Help.defaultColumns = 'title,parent,sort,activated,createdAt';
Help.defaultSort = '-sort';
Help.searchFields = 'title,content';
Help.defaultFilters = {
  activated: true
};
Help.api = {
  list: 1,
  show: 1
};
Help.groups = {
  content: 'Content'
};
Help.fields = {
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