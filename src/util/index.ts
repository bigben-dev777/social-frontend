export function stringAvatar(name: string) {
  return {
    sx: {
      backgroundColor: '#141413'
    },
    children: `${name[0]}`
  };
}
