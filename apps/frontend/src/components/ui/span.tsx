import * as React from 'react'

import { cn } from '@/lib/utils'

export const RepoLanguage = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
	({ className, ...props }, ref) => (
		<span
			ref={ref}
			className={cn(
				'inline-flex items-center rounded-full bg-gray-100 m-1 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-100',
				className
			)}
			{...props}
		/>
	)
)
RepoLanguage.displayName = 'RepoLanguage'
