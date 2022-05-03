// The line below has length of 146.
// I would expect Prettier to limit the line length at printWidth i.e. after 100 characters.
import { MyClassHasAVeryLongNameSoThatTheImportWillExceedThePrintWidth } from "./the/import/is/located/behind/some/path/MyClassHasAVeryLongName";

if (true) {
     // Notice that VS Code takes .prettierrc into consideration: tabWidth is 5 spaces
     const instance = new MyClassHasAVeryLongNameSoThatTheImportWillExceedThePrintWidth();
     instance.myMethod();
}
