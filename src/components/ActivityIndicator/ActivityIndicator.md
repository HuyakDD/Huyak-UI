**Activity Indicator Component**

```jsx
import { ActivityIndicator } from "huyak-ui";

<ActivityIndicator />
```

#### **Colors**
```jsx
import { ActivityIndicator, Flex } from "huyak-ui";

<Flex jc="space-around" ai="center">
    <ActivityIndicator color="#FFC107" />
    <ActivityIndicator color="rgb(220, 53, 69)"/>
    <ActivityIndicator color="#17A2B8"/>
    <ActivityIndicator color="pink"/>
</Flex>
```

#### **Sizes**
```jsx
import { ActivityIndicator, Flex } from "huyak-ui";

<Flex jc="space-around" ai="center" padding="1em">
    <ActivityIndicator size="small" />
    <ActivityIndicator />
    <ActivityIndicator size="large" />
</Flex>
```

#### **Number Of Sticks**
```jsx
import { ActivityIndicator, Flex } from "huyak-ui";

<Flex jc="space-around" ai="center">
    <ActivityIndicator numOfSticks="2" />
    <ActivityIndicator />
    <ActivityIndicator numOfSticks="7" />
</Flex>
```

***
***