import { type UUID } from "crypto"
import { type TasksDto } from "src/tasks/tasks.dto"

export class CreateCallsDto {
        label: string
}

export class CallDto{
        uuid: UUID
        label: string
        content: UUID[]
}

export class CallMoreDto{
        uuid: UUID
        label: string
        content: TasksDto[]
}