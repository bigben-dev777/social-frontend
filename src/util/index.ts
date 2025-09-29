export function stringAvatar(name: string) {
  return {
    sx: {
      backgroundColor: '#141414'
    },
    children: `${name[0]}`
  };
}
