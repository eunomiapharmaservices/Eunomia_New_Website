"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export type TeamPerson = {
  name: string;
  role: string;
  image?: string;
  country?: string;
  bio: string;
};

export function TeamProfile({ person, featured = false, bioEnabled = true }: { person: TeamPerson; featured?: boolean; bioEnabled?: boolean }) {
  const profileId = person.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window.location.hash === `#${profileId}`) setOpen(true);
  }, [profileId]);
  if (!bioEnabled) {
    return (
      <article className={`profile-card profile-card-static${featured ? " profile-card-featured" : ""}`}>
        <span className="profile-photo">{person.image ? <img src={person.image} alt={person.name} /> : <span className="profile-photo-placeholder" aria-label="Photograph coming soon">{person.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>}</span>
        <span className="profile-copy">
          {person.country && <span className="profile-country">{person.country}</span>}
          <strong>{person.name}</strong>
          <small>{person.role}</small>
        </span>
      </article>
    );
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger id={profileId} className={`profile-card${featured ? " profile-card-featured" : ""}`} aria-label={`Read ${person.name}'s bio`}>
        <span className="profile-photo">{person.image ? <img src={person.image} alt="" /> : <span className="profile-photo-placeholder" aria-hidden="true">{person.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>}</span>
        <span className="profile-copy">
          {person.country && <span className="profile-country">{person.country}</span>}
          <strong>{person.name}</strong>
          <small>{person.role}</small>
          <span>View bio <ArrowUpRight aria-hidden="true" /></span>
        </span>
      </DialogTrigger>
      <DialogContent className="team-bio-dialog">
        <DialogHeader>
          <DialogTitle>{person.name}</DialogTitle>
          {person.country && <p className="team-bio-country">{person.country}</p>}
          <p className="team-bio-role">{person.role}</p>
          <DialogDescription>{person.bio}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
