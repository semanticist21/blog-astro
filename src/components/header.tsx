export function Header() {
	return (
		<header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container max-w-5xl mx-auto px-4">
				<div className="flex h-16 items-center">
					<a
						href="/"
						className="text-xl font-semibold hover:text-primary transition-colors"
					>
						Home
					</a>
				</div>
			</div>
		</header>
	);
}
