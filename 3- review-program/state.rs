use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::program_error::ProgramError;
use solana_program::program_pack::{IsInitialized, Sealed};
use thiserror::Error;

#[derive(BorshSerialize, BorshDeserialize)]
pub struct AccountState {
    pub is_initialized: bool,
    pub rating: u8,
    pub description: String,
    pub title: String,
}

impl Sealed for AccountState {}

impl IsInitialized for AccountState {
    fn is_initialized(&self) -> bool {
        self.is_initialized
    }
}

#[derive(Debug, Error)]
pub enum ReviewError {
    #[error("Account not initialized yet")]
    UninitializedAccount,

    #[error("PDA derived does not equal PDA passed in")]
    InvalidPDA,

    #[error("Rating greater than 10 or less than 1")]
    InvalidRating,
}

impl From<ReviewError> for ProgramError {
    fn from(e: ReviewError) -> Self {
        ProgramError::Custom(e as u32)
    }
}
