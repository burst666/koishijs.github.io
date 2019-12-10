---
sidebarDepth: 2
---

# 全局 API

## appList

当前所有 [App](./app.md) 实例构成的数组。

## appMap

当前所有 [App](./app.md) 实例构成的键值对，键为对应的 QQ 号。

::: tip 提示
由于 Koishi 的 QQ 号是一项可选配置，因此当程序未收到任何事件上报，也未主动调用过 [`getSelfIds()`](#getselfids) 时，这个键值对可能并不会包含所有 App 实例的信息。但一旦通过上述两种方式获得了 QQ 号，相应的 App 实例也会立即绑定到这个对象上。
:::

## startAll()

启动所有机器人。

- 返回值: `Promise<void>`

## onStart(callback)

添加启动钩子。

- callback: `() => any` 当全部机器人启动完毕后会调用此函数
- 返回值: `void`

## stopAll()

停止所有机器人。

- 返回值: `void`

## onStop(callback)

添加停止钩子。

- callback: `() => any` 当全部机器人停止运行后会调用此函数
- 返回值: `void`

## getSelfIds()

获取所有机器人的 QQ 号。已经获取到的将不再获取。

- 返回值: `Promise<number[]>` 所有机器人的 QQ 号

## getContextId(meta)

获得上下文 ID，可用于 [`sender.sendContextMsg()`](./sender.md#sender-sendcontextmsg-contextid-message-autoescape)。

- meta: `Meta` 元信息对象
- 返回值: `string` 上下文 ID

## getTargetId(target)

获得目标用户 QQ 号。传入一个字符串，可能是 QQ 号本身或是 @ 群内成员。

- target: `string` 要解析的字符串
- 返回值: `number` 目标 QQ 号

## getSenderName(meta)

获得发言者称呼。当用户在数据库中已经设置了称呼，则使用设置的称呼；否则依次使用用户在群中的群名片和昵称。

- meta: `Meta` 元信息对象
- 返回值: `string` 用户称呼

## showSuggestions(options)

尝试显示候选输入。

- options: `SuggestOptions` 配置对象
- 返回值: `Promise<void>`

```ts
interface SuggestOptions {
  target: string
  items: string[]
  meta: MessageMeta
  next: NextFunction
  prefix: string
  suffix: string
  coefficient: number
  command: Command | ((suggestion: string) => Command)
  execute: (suggestion: string, meta: MessageMeta, next: NextFunction) => any
}
```

## updateActivity(activity, groupId)

更新活动数据。

- activity: `Activity` 活动数据对象
- groupId: `number` 所在的群号
- 返回值: `void`

```ts
type Activity = Record<number, Record<number, number>>
```