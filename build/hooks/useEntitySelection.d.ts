export type EntityId = string | null;
export type Action = "add" | "edit" | "delete" | "resetPassword" | null;
export type Update = (entityId: EntityId, action: Action) => void;
export default function useEntitySelection(): {
    entityId: EntityId;
    action: Action;
    update: Update;
    modal: any;
};
