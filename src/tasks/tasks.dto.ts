import { type UUID } from "crypto"

export type IPriority = "low" | "medium" | "hight" | "no_priority" | "highest"


export class TasksDtoCreate {
        title: string
        uuid_call: UUID
        author: {
                uuid: UUID
                getFullName: string
        }
        description?: string
        priority: IPriority
        readiness?: boolean | undefined
        executors: {
                uuid: UUID
                getFullNameRu: string
        }[]
        dateExecution: string | null
}

export class TasksDto {
        uuid: string
        title: string
        uuid_call: UUID
        author: {
                uuid: UUID
                getFullName: string
        }
        description?: string
        priority: IPriority
        readiness?: boolean | undefined
        executors: UUID[]
        dateExecution: string | null
}