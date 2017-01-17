<% if (!options.skipTestImport) { %>
<% if (props.useImport) { %>
import Vue from 'vue'
import path from 'path'
import <%= options.basename %> from 'components/<%= options.name %>'
<% if (props.testAssertion !== '') { %>import <%- props.testAssertion %> from '<%- props.testAssertion %>'<% } %>
<% } else { %>
var Vue = require('vue')
var path = require('path')
var <%= options.basename %> = require('components/<%= options.name %>')
<% if (props.testAssertion !== '') { %>var <%- props.testAssertion %> = require('<%- props.testAssertion %>')<% } %>
<% } %>
<% for (let userImport of props.testUserImports) { %>
<%- userImport %><% } %>
<% } %>

const target = '<%= options.name%>'
describe(target, () => {
  const Ctor = Vue.extend(<%= options.basename %>)
  it('textContent', () => {
    const text = '<%= options.basename %>Component'
    const vm = new Ctor({
      el: document.createElement('div')
    }).$mount()

    <% if (props.testAssertion == 'should') { %>
    vm.$el.textContent.should.be.equal(text)
    <% } else if (props.testAssertion == 'expect'){ %>
    expect(vm.$el.textContent).toEqual(text)
    <% } else if (props.testAssertion == 'expect.js'){ %>
    expect(vm.$el.textContent).to.eql(text)
    <% } %>
  })
})
