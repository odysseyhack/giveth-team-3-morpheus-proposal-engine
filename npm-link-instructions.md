# How to set up Npm Link for a Library

You can use npm link to link a library into another project so that you can develop both the library and the project at the same time without having to publish updates to a repository and fetch them down.

The steps to set up a library to be linked are as follows:
1. Build library ```yarn build-lib```
2. In the lib folder, remove all devDependencies from the package.json (There is probably a more efficient way to do this but you only have to do it once)
3. npm link lib directory:
    * ```cd lib```
    * ```npm link```
4. As mentioned in the template project npm link instructions, there is a bug when using React Hooks and npm link. See this issue for a [fix](https://github.com/facebook/react/issues/13991#issuecomment-474967647).
    
You should ideally only ever have to do this once. It creates a symlink between the lib folder and a dependency for "@wip-abramson/ecosystem": x.x.x in your global node_modules directory. You can now link this library into any project that uses this dependency. See npm-link-instructions in commons-template-project.

Whenever you make changes to this library rerun ```yarn build-lib``` and any projects that have this library linked should rebuild with the updated code.