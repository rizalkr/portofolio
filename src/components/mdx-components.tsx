import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type ImgProps = ComponentPropsWithoutRef<"img">;

export const mdxComponents = {
  h1: ({ children, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-10 mb-4 font-heading text-2xl font-bold tracking-tight text-zinc-100 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-10 mb-3 border-b border-zinc-800/80 pb-2 font-heading text-xl font-semibold tracking-tight text-zinc-100"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-2 font-heading text-lg font-semibold tracking-tight text-zinc-100"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className="mt-6 mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-zinc-200"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p
      className="my-4 text-[15px] leading-7 text-zinc-300"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="my-4 list-disc space-y-2 pl-6 text-[15px] leading-7 text-zinc-300 marker:text-indigo-400"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="my-4 list-decimal space-y-2 pl-6 text-[15px] leading-7 text-zinc-300 marker:font-mono marker:text-xs marker:text-indigo-400"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-zinc-100" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-zinc-200" {...props}>
      {children}
    </em>
  ),
  blockquote: ({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 border-l-2 border-indigo-400/70 pl-4 text-sm italic text-zinc-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-8 border-zinc-800" {...props} />
  ),
  a: ({ href = "", children, ...props }: AnchorProps) => {
    const className =
      "text-indigo-400 underline decoration-indigo-400/40 underline-offset-4 transition-colors hover:text-indigo-300 hover:decoration-indigo-300";

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900/80 p-4 font-mono text-[13px] leading-relaxed text-zinc-200 [&>code]:border-0 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 font-mono text-[13px] text-indigo-300"
      {...props}
    >
      {children}
    </code>
  ),
  table: ({ children, ...props }: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-zinc-800">
      <table className="w-full border-collapse text-left text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead className="border-b border-zinc-800 bg-zinc-900/70" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody className="divide-y divide-zinc-800/70" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: ComponentPropsWithoutRef<"tr">) => (
    <tr className="transition-colors hover:bg-zinc-900/30" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th
      className="px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td className="px-4 py-2.5 text-zinc-300" {...props}>
      {children}
    </td>
  ),
  img: ({ alt = "", ...props }: ImgProps) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      loading="lazy"
      className="my-6 block h-auto w-full rounded-lg border border-zinc-800 bg-zinc-950"
      {...props}
    />
  ),
};
