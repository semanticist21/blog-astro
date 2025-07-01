"use client";

import { blogStructure } from "@/lib/blog-data";
import { ChevronDown, ChevronRight, FileText } from "lucide-react";
import { useState } from "react";

interface NavItemProps {
	item: any;
	level: number;
}

function NavItem({ item, level }: NavItemProps) {
	const [isOpen, setIsOpen] = useState(level === 0);

	if (item.type === "file") {
		return (
			<a
				href={`/blog/${item.slug}`}
				className="flex items-center gap-2 py-1 px-2 text-sm hover:bg-muted rounded-md transition-colors"
				style={{ paddingLeft: `${level * 12 + 8}px` }}
			>
				<FileText className="h-4 w-4 text-muted-foreground" />
				{item.title}
			</a>
		);
	}

	return (
		<div>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 py-1 px-2 text-sm hover:bg-muted rounded-md transition-colors w-full text-left"
				style={{ paddingLeft: `${level * 12 + 8}px` }}
			>
				{isOpen ? (
					<ChevronDown className="h-4 w-4 text-muted-foreground" />
				) : (
					<ChevronRight className="h-4 w-4 text-muted-foreground" />
				)}
				{item.name}
			</button>
			{isOpen && (
				<div className="space-y-1">
					{item.children.map((child: any, index: number) => (
						<NavItem key={index} item={child} level={level + 1} />
					))}
				</div>
			)}
		</div>
	);
}

export function Sidebar() {
	return (
		<div className="sticky top-8 space-y-4">
			<h3 className="text-lg font-semibold">Table of Contents</h3>
			<nav className="space-y-1">
				{blogStructure.map((item, index) => (
					<NavItem key={index} item={item} level={0} />
				))}
			</nav>
		</div>
	);
}
