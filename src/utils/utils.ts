export const LoremIpsum = () : string => {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis massa ligula, et tincidunt ante aliquet sed. Suspendisse mattis arcu et fringilla tempus. Ut placerat tempus ante nec accumsan. Proin eu ex vel quam suscipit tempor pretium id ante. Integer viverra maximus metus, quis eleifend nulla finibus eu. Vivamus gravida nunc nisl. Nulla feugiat lacinia odio, in bibendum nisi semper eget. Etiam molestie elit pharetra egestas hendrerit. Vestibulum molestie tincidunt sem, at fermentum nisi. Donec volutpat eu arcu a pulvinar. Aenean tristique sem nec turpis convallis, sit amet tincidunt libero convallis. Etiam feugiat pellentesque nisi in fringilla. In nec ipsum eget neque sagittis iaculis eget nec risus. Quisque justo diam, posuere feugiat porttitor quis, dictum eget urna.'
}

export const StringJoiner = (joiner : string, arr: string[]) : string => {
    return arr.join(joiner)
}