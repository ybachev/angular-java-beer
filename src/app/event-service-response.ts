export interface EventServiceResponse {
  displayEvents: {
    format: string,
    event: string,
    name: string,
    number: number,
    summary: string,
    sponsor: {
      name: string,
      extraInfo: string,
      logo: string
    },
    language: string,
    when: string,
    subscription: {
      required: boolean,
      dueDate: string,
      link: string,
      text: string
    },
    slogan: string,
    locationMap: string,
    id: number
  }
}
