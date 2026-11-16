CREATE TABLE `inspection_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`reference` text NOT NULL,
	`submission_key` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`estate_slug` text NOT NULL,
	`topic` text NOT NULL,
	`preferred_date` text NOT NULL,
	`preferred_time` text NOT NULL,
	`message` text NOT NULL,
	`status` text DEFAULT 'New' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `inspection_requests_reference_unique` ON `inspection_requests` (`reference`);--> statement-breakpoint
CREATE UNIQUE INDEX `inspection_requests_submission_key_unique` ON `inspection_requests` (`submission_key`);--> statement-breakpoint
CREATE INDEX `inspection_created_idx` ON `inspection_requests` (`created_at`);--> statement-breakpoint
CREATE TABLE `listing_updates` (
	`slug` text PRIMARY KEY NOT NULL,
	`status` text NOT NULL,
	`price` integer NOT NULL
);
