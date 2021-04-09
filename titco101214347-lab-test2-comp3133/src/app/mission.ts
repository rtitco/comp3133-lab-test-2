export interface Mission {
    flight_number: number,
    mission_name: string;
    launch_year: number;
    details: string;
    links: Links;
    launch_site: LaunchSite;
}

interface Links {
    mission_patch_small: string;
}

interface LaunchSite {
    site_name_long: string;
}