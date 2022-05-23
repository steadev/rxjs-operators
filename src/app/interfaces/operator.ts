export const CombinationOperators = [
  'combineLatest',
  'concat',
  'merge',
  'race',
  'startWith',
  'withLatestFrom',
  'zip'
]
export const ConditionalOperators = [
  'defaultIfEmpty',
  'every',
  'sequenceEqual'
];
export const CreationObservables = [
  'from',
  'interval',
  'of',
  'timer'
]

export const FilterOperators = [
  'filter',
  'first',
  'last',
  'take',
  'takeUntil',
  'takeWhile',
  'takeLast',
  'skip',
  'skipUntil',
  'skipWhile',
  'debounce',
  'debounceTime',
  'distinct',
  'distinctUntilChanged',
  'throttle',
  'throttleTime',
  'find',
  'findIndex',
  'elementAt',
  'ignoreElements',
  'sample',
  'sampleTime'
];

export const MathmeticalOperators = [
  'count',
  'max',
  'min',
  'reduce'
];

export const TransformationOperators = [
  'buffer',
  'bufferCount',
  'bufferTime',
  'bufferToggle',
  'bufferWhen',
  'concatMap',
  'concatMapTo',
  'map',
  'mapTo',
  'mergeMap',
  'mergeMapTo',
  'pairwise',
  'pluck',
  'repeat',
  'scan',
  'switchMap',
  'switchMapTo'
];

export const UtilityOperators = [
  'delay',
  'delayWhen'
]

export const OperatorCategory = [
  {
    operatorType: 'creation observables',
    operators: CreationObservables
  },
  {
    operatorType: 'transformation operators',
    operators: TransformationOperators
  },
  {
    operatorType: 'filtering operators',
    operators: FilterOperators
  },
  {
    operatorType: 'combination operators',
    operators: CombinationOperators
  },
  {
    operatorType: 'mathmetical operators',
    operators: MathmeticalOperators
  },
  {
    operatorType: 'utility operators',
    operators: UtilityOperators
  },
  {
    operatorType: 'conditional operators',
    operators: ConditionalOperators
  },
];