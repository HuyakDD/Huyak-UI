**Card Component - a handy container component**

```jsx
import { Card } from "huyak-ui";

<Card margin="1em" padding="1em">Lorem Ipsum YO YO!!!</Card>
```

#### **Width**
```jsx
import { Card, Flex } from "huyak-ui";

<Flex fd="column">
  <Card width="150px" margin="1em" padding="1em">
    150px
  </Card>
  <Card width="55%" margin="1em" padding="1em">
    55%
  </Card>
  <Card width="31vw" margin="1em" padding="1em">
    31vw
  </Card>
</Flex>
```

#### **Height**
```jsx
import { Card, Flex } from "huyak-ui";

<Flex>
  <Card margin="1em" padding="1em">
    Defaults to height: "inherit"
  </Card>
  <Card height="100px" margin="1em" padding="1em">
    100px
  </Card>
  <Card height="13vh" margin="1em" padding="1em">
    13vh
  </Card>
  <Card height="7em" margin="1em" padding="1em">
    7em
  </Card>
</Flex>
```


***
***