import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>
}

type InputControlProps = ComponentProps<'input'>

function InputControl(props: InputControlProps) {
  return (
    <input
      {...props}
      className="w-full flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
    />
  )
}

type InputRootProps = ComponentProps<'div'>

function InputRoot(props: InputRootProps) {
  return (
    <div
      {...props}
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    />
  )
}

export const Input = {
  Prefix: InputPrefix,
  Root: InputRoot,
  Control: InputControl,
}
