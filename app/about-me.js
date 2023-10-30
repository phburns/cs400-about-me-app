export function navigateToMainPage(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('main-page');
}

export function navigateToPrevious(args) {
  const button = args.object;
  const page = button.page;
  page.frame.goBack();
}

export function navigateToNext(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('skills');
}
