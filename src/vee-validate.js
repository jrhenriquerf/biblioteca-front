import { extend, localize } from 'vee-validate';
import pt from 'vee-validate/dist/locale/pt_BR.json';
import * as rules from 'vee-validate/dist/rules';

// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('pt_BR', pt);
