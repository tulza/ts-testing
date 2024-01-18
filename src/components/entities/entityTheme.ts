type ThemeProps = {
  ThemeId: string;
  DisplayedName: string;
};

export class Theme {
  ThemeId: string;
  DisplayedName: string;

  constructor({ ThemeId, DisplayedName }: ThemeProps) {
    this.ThemeId = ThemeId;
    this.DisplayedName = DisplayedName;
  }
}
