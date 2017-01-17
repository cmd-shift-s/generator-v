<template lang="<%- props.templateLang%>">
  <div>
    <%- options.name %>Component
  </div>
</template>

<script>
<% if (!options.skipImport && props.srcUserImports.length != 0) { for (let userImport of props.srcUserImports) { %>// user imports
<% const [name, path] = userImport.split(':'); if (props.useImport) { %>import <%-name %> from '<%-path %>'<%- semi %><%} else {%>var <%-name%> = require('<%-path%>')<%- semi %><%}}} %>
export default {
  data() {
    return { }
  }<% if(!options.skipMember && props.members.length !== 0) {%>,<% let i=0; for (let member of props.members) { i++ %>
  <%- member %>: { }<% if(i < props.members.length) {%>,<%}}}%>
}<%- semi %>
</script>

<style lang="<%- props.styleLang%>"<% if (props.styleScoped) {%> scoped<%} %>>
</style>
