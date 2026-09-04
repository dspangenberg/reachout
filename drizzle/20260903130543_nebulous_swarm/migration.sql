CREATE TABLE `lists` (
	`id` text PRIMARY KEY,
	`name` text NOT NULL,
	`color` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` text PRIMARY KEY,
	`listId` text NOT NULL,
	`title` text NOT NULL,
	`notes` text NOT NULL,
	`done` integer DEFAULT false NOT NULL,
	`important` integer DEFAULT false NOT NULL,
	`deleted` integer DEFAULT false NOT NULL,
	`due` text,
	`position` integer DEFAULT 0 NOT NULL,
	`createdAt` text NOT NULL,
	`completedAt` text
);
