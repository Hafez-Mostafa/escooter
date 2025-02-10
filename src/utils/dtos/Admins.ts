// dto.ts
export interface SignupDTO {
    fullName: string;
    email: string;
    password: string;
    role: "ADMIN" | "MODERATOR"; // Adjust roles as needed
  }
  
  export interface SigninDTO {
    email: string;
    password: string;
  }
  
  
export interface UpdateAdminDto {
    fullName?: string;
    email?: string;
    role: "ADMIN" | "MODERATOR"; // Adjust roles as needed
  }