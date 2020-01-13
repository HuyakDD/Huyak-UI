**Flex: Just a div with display: flex**

#### **Flex Direction**
Defaults to **`flex-direction: row`**. You may control this setting using the **`fd`** prop.
```jsx
import { Card, Flex } from "huyak-ui";

const DemoItem = props => (
  <div style={{width: '100px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               border: '1px solid green', 
               background: 'black', 
               margin: '.5em',
               padding: '.3em 0',
               fontSize: '14px'}}>
    {props.children}
  </div>
);

<Flex>
  <Card margin="1em" padding="1em">
    <Flex>
        <DemoItem key="1">row</DemoItem>
        <DemoItem key="2">row</DemoItem>
        <DemoItem key="3">row</DemoItem>
    </Flex>
  </Card>

  <Card margin="1em" padding="1em">
    <Flex fd="column">
        <DemoItem key="1">col</DemoItem>
        <DemoItem key="2">col</DemoItem>
        <DemoItem key="3">col</DemoItem>
    </Flex>
  </Card>
</Flex>
```

#### **Justify Flex Content**
Defaults to **`justify-content: flex-start`**. You may control this setting using the **`jc`** prop.
Used to justify content relatively to the x-axis (y-axis) when **`fd`** is set to row (column).
```jsx
import { Card, Flex } from "huyak-ui";

const DemoItem = props => (
  <div style={{width: '100px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               border: '1px solid green', 
               background: 'black', 
               margin: '.5em',
               padding: '.3em 0',
               fontSize: '14px'}}>
    {props.children}
  </div>
);

<div>
   <Card margin="1em" padding="1em">
    <Flex>
        <DemoItem key="1">flex-start</DemoItem>
        <DemoItem key="2">flex-start</DemoItem>
        <DemoItem key="3">flex-start</DemoItem>
    </Flex>
  </Card>

  <Card margin="1em" padding="1em">
    <Flex jc="center">
        <DemoItem key="1">center</DemoItem>
        <DemoItem key="2">center</DemoItem>
        <DemoItem key="3">center</DemoItem>
    </Flex>
  </Card>

  <Card margin="1em" padding="1em">
  <Flex jc="flex-end">
        <DemoItem key="1">flex-end</DemoItem>
        <DemoItem key="2">flex-end</DemoItem>
        <DemoItem key="3">flex-end</DemoItem>
  </Flex>
</Card>

  <Card margin="1em" padding="1em">
    <Flex jc="space-between">
        <DemoItem key="1">space-between</DemoItem>
        <DemoItem key="2">space-between</DemoItem>
        <DemoItem key="3">space-between</DemoItem>
    </Flex>
  </Card>

   <Card margin="1em" padding="1em">
    <Flex jc="space-around">
        <DemoItem key="1">space-around</DemoItem>
        <DemoItem key="2">space-around</DemoItem>
        <DemoItem key="3">space-around</DemoItem>
    </Flex>
  </Card>
</div>
```

#### **Align Items in Flex**
Defaults to **`align-items: stretch`**. You may control this setting using the **`ai`** prop.
Used to align items inside flex relatively to the y-axis (x-axis) when **`fd`** is set to row (column) (give it a try...).
```jsx
import { Card, Flex } from "huyak-ui";

const DemoItem = props => (
  <div style={{width: '100px',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               border: '1px solid green', 
               background: 'black', 
               margin: '.5em',
               padding: '.3em 0',
               fontSize: '14px'}}>
    {props.children}
  </div>
);

<div>
  <Card height="120px" margin="1em" padding="1em">
    <Flex>
        <DemoItem key="1">stretch</DemoItem>
        <DemoItem key="2">stretch</DemoItem>
        <DemoItem key="3">stretch</DemoItem>
    </Flex>
  </Card>

  <Card height="120px" margin="1em" padding="1em">
    <Flex ai="flex-start">
        <DemoItem key="1">flex-start</DemoItem>
        <DemoItem key="2">flex-start</DemoItem>
        <DemoItem key="3">flex-start</DemoItem>
    </Flex>
  </Card>

  <Card height="120px" margin="1em" padding="1em">
    <Flex ai="center">
        <DemoItem key="1">center</DemoItem>
        <DemoItem key="2">center</DemoItem>
        <DemoItem key="3">center</DemoItem>
    </Flex>
  </Card>

  <Card height="120px" margin="1em" padding="1em">
    <Flex ai="flex-end">
        <DemoItem key="1">flex-end</DemoItem>
        <DemoItem key="2">flex-end</DemoItem>
        <DemoItem key="3">flex-end</DemoItem>
    </Flex>
  </Card>

  <Card height="120px" margin="1em" padding="1em">
    <Flex ai="baseline">
        <DemoItem key="1">baseline</DemoItem>
        <DemoItem key="2">baseline</DemoItem>
        <DemoItem key="3">baseline</DemoItem>
    </Flex>
  </Card>
</div>
```


***
***