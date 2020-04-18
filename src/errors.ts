/* eslint-disable max-classes-per-file */
export class UnsolvableDependencyError extends Error {}
export class DependencyManifestMismatchError extends Error {}
export class InvalidLockfileOperation extends Error {}
export class ModNotFoundError extends Error {}
export class InvalidModFileError extends Error {}
export class GameRunningError extends Error {}
export class InvalidConfigError extends Error {}
export class ImcompatibleGameVersion extends Error {}
export class NetworkError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
export class ModRemovedByAuthor extends Error {
  modID: string;
  version?: string;
  constructor(message: string, modID: string, version?: string) {
    super(message);
    this.modID = modID;
    this.version = version;
  }
}
