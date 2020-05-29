# Run this command on the output of the GraphQL query to get a markdown formatted list of all PRs 
# across the mun organization.

jq -r '.data.search.edges[].node | \"* **\" + .title + \"** [[PR#\" + (.number|tostring) + \"]](\" + .url + \")\"' may > may.md
