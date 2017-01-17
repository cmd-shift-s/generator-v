<template lang="<%= props.templateLang%>">
  <div>
    <%= options.name %>Component
  </div>
</template>

<script>
<% if (!options.skipImport) { %>
<%   for (let userImport of props.srcUserImports) { %>
<%-     userImport %>
<%   } %>
<% } %>
export default {
<% if (!options.skipMember) { let i = 0; for (let member of props.members) { i++ %>
<% if (member === 'data') { %>  data() {
    return { }
  }<% if (i !== props.members.length) {%>,<%}%>
<%   } else { %>
  <%- member %>: { }<% if (i !== props.members.length) {%>,<%}%><% } %><% }} %>
}
</script>

<style lang="<%= props.styleLang%>"<% if (props.styleScoped) {%> scoped<%} %>>
</style>
