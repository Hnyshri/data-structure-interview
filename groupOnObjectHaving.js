const input = [
    { role: "Organize Admin", role_id: "id1", permission_name: "View All Users", active: "true" },
    { role: "Organize Admin", role_id: "id1", permission_name: "Create users", active: "true" },
    { role: "Organize Admin", role_id: "id1", permission_name: "Edit users", active: "true" },
    { role: "System Admin", role_id: "id2", permission_name: "Edit users", active: "true" },
    { role: "System Admin", role_id: "id2", permission_name: "Edit users", active: "true" },
];

const roles = input.reduce((a, { role_id, permission_name: name, active }) => {
    const foundRole = a.find(({ id }) => id === role_id);
    if (foundRole) foundRole.permissions.push({ name, active });
    else a.push({ id: role_id, permissions: [{ name, active }] });
    return a;
}, []);

console.log(roles);