<% if (props.useImport) { %>import <%- options.basename %> from 'components/<%- options.name %><%- props.suffixScript %>'<%- semi %><%} else {%>var <%- options.basename %> = require('components/<%- options.name %><%- props.suffixScript %>')<%- semi %><%}%>
<% if (!options.skipTestImport && props.testUserImports.length != 0) {%>// user imports<% for (let userImport of props.testUserImports) { %>
<% const [name, path] = userImport.split(':'); if (props.useImport) { %>import <%-name %> from '<%-path %>'<%- semi %><%} else {%>var <%-name%> = require('<%-path%>')<%- semi %><%}}} %>

describe('<%- options.name%>.vue', () => {
  <%- props.testUserCtor %>(<%- options.basename %>)<%- semi %>

  it('textContent')<%- semi %>
})<%- semi %>
