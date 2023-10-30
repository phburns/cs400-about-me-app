import { createViewModel } from './main-view-model';
const frameModule = require('@nativescript/core/ui/frame');

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function navigateToAboutMe(args) {
  console.log('Navigating to About Me page');
  const button = args.object;
  const page = button.page;
  page.frame.navigate('about-me');
}

export function navigateToSkills(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('skills');
}

export function navigateToContactMe(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('contact-me');
}

export function navigateToMainPage(args) {
  const button = args.object;
  const page = button.page;
  page.frame.navigate('main-page');
}
