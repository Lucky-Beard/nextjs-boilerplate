export const useStyles = (stylesFile: any) => {
  const getStyle = (className: string, scoped: boolean = true) => {
    if (!stylesFile) {
      return null;
    }
    return scoped ? stylesFile[className] : className;
  };
  return getStyle;
};
